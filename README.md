This website is live [here](https://wildlife-conservation-platform-74hcyy70h-maxprodigys-projects.vercel.app/)
But To Access The Login Functionality Follow These Steps:
### Steps to Setup the project

1. **Clone the project locally**:
    You have to clone the repository locally:
    ```bash
    git clone https://github.com/maxprodigy/Wildlife_Conservation_Platform.git
    ```

2. **Navigate to the Project Directory**:
   Change into the project directory:

   ```bash
   cd Wildlife_Conservation_Platform
   ```

3. **Install Python**:
   Ensure you have Python installed on your system. You can download it from [python.org](https://www.python.org/downloads/).

4. **Create a Virtual Environment**:
   Open your terminal and navigate to where you clone the project to:

   ```bash
   python -m venv venv
   ```

   Replace `venv` with the name you want for your virtual environment.

5. **Activate the Virtual Environment**:
   - On Windows:

     ```bash
     venv\Scripts\activate
     ```

   - On macOS and Linux:

     ```bash
     source venv/bin/activate
     ```

6. **Install Dependencies**:
   Ensure you have a `requirements.txt` file in your project directory. Then, install the dependencies:

   ```bash
   pip install -r requirements.txt
   ```

7. **Apply Migrations**:
   Set up the initial database by running migrations:

   ```bash
   python manage.py migrate
   ```

8. **Run the Development Server**:
   Start the development server to see your project in action:

   ```bash
   python manage.py runserver
   ```

   By default, the server runs at `http://127.0.0.1:8000/`.

9. **Create a Superuser (Optional)**:
   If you want to access the Django admin site, create a superuser:

   ```bash
   python manage.py createsuperuser
   ```
   Then, visit `http://127.0.0.1:8000/admin` and use the credentials your used in creating you superuser to login here.

10. **Stop Server**:
    When you're done working on the project, you can stop server by pressing: `Ctrl+c`

11. **Deactivating the Virtual Environment**:
    When you're done working on the project, you can deactivate the virtual environment by running:

    ```bash
    deactivate
    ```

### Additional Tips

- **Updating Dependencies**:
  If you need to update your dependencies or add new ones, you can use `pip` and then update your `requirements.txt` file:

  ```bash
  pip freeze > requirements.txt
  ```

- **Version Control**:
  Ensure your project is under version control (e.g., using Git) to manage changes and collaborate with others.

These steps should help you get started with Global Nature Conservation platform
