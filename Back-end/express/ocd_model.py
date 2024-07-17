# -*- coding: utf-8 -*-

import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.svm import SVC
from sklearn.neighbors import KNeighborsClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.linear_model import LinearRegression
from sklearn.metrics import accuracy_score
url = '/content/ocd.csv'
df = pd.read_csv(url)

# Step 3: Exploratory Data Analysis (EDA)
print("First few rows of the dataset:")
print(df.head())

print("\nSummary statistics of numerical features:")
print(df.describe())

print("\nMissing values in the dataset:")
print(df.isnull().sum())

print("\nDistribution of the target variable 'Obsession Type':")
print(df['Obsession Type'].value_counts())

# Step 4: Encode categorical variables
label_encoder = LabelEncoder()
categorical_columns = ['Gender', 'Ethnicity', 'Marital Status', 'Education Level',
                       'Previous Diagnoses', 'Family History of OCD', 'Obsession Type',
                       'Compulsion Type', 'Depression Diagnosis', 'Anxiety Diagnosis',
                       'Medications']

for col in categorical_columns:
    df[col] = label_encoder.fit_transform(df[col])

# Step 5: Split Data
X = df.drop(columns=['Obsession Type', 'OCD Diagnosis Date'])
y = df['Obsession Type']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

svm = SVC(kernel='linear')
svm.fit(X_train, y_train)

knn = KNeighborsClassifier(n_neighbors=5)
knn.fit(X_train, y_train)

dt = DecisionTreeClassifier()
dt.fit(X_train, y_train)

lr = LinearRegression()
lr.fit(X_train, y_train)

# Step 7: User Input Collection
user_input_type = input("Enter the type of OCD (e.g., cleanliness, symmetry, contamination, checking, etc.): ")
user_input_duration = int(input("Enter the duration of symptoms (in months): "))
user_input_previous_diagnoses = input("Any previous diagnoses? (Yes/No): ")

# Step 8: Create a DataFrame for user input
user_input_df = pd.DataFrame({
    'Age': [30],
    'Anxiety Diagnosis': [0],
    'Compulsion Type': [0],
    'Depression Diagnosis': [0],
    'Education Level': [2],
    'Duration of Symptoms (months)': [user_input_duration],
    'Previous Diagnoses': [1 if user_input_previous_diagnoses.lower() == 'yes' else 0],
    'Obsession Type': [user_input_type],
    'Ethnicity': [0],
    'Family History of OCD': [0],
    'Gender': [0],
    'Marital Status': [0],
    'Medications': [0],
    'Patient ID': [1],
    'Y-BOCS Score (Compulsions)': [0],
    'Y-BOCS Score (Obsessions)': [1],
})

# Step 9: Perform label encoding for user input
for col in categorical_columns:
    # Transform the column and handle unseen labels gracefully
    user_input_df[col] = user_input_df[col].map(lambda s: label_encoder.transform([s])[0] if s in label_encoder.classes_ else -1)

# Step 10: Make predictions for user input
selected_model = svm  # Choose the model you want to use

# Include 'Patient ID' in the user input DataFrame
user_input_df['Patient ID'] = 1  # Assuming patient ID 1

# Make predictions
predicted_type = selected_model.predict(user_input_df)
print("Predicted OCD Type for user input:", predicted_type[0])

# Step 11: Suggest a doctor based on the predicted OCD type
def suggest_doctor(oct_type):
    if oct_type == 0:
        return "Psychiatrist"
    elif oct_type == 1:
        return "Therapist"
    elif oct_type == 2:
        return "Counselor"
    else:
        return "No specific suggestion available"

suggested_doctor = suggest_doctor(predicted_type[0])
print("Based on the predicted OCD type, it is suggested to consult a", suggested_doctor)

