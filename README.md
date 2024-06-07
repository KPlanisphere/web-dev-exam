# Web Development Exam

### Description

This repository contains two web development problems focused on form validation and a simple calculator application. The exercises demonstrate the use of HTML, CSS, JavaScript, and Bootstrap to create interactive and responsive web pages.


#### Problem 1: Form Validation
- **Files:**
  - `Formulario/index.html`: The main HTML file containing the form.
  - `Formulario/style.css`: Custom CSS styles for the form.
  - `Formulario/script.js`: JavaScript file for form validation.

- **Description:**
  - This exercise includes a form with fields for username, email, and password. The form validates input using JavaScript and provides visual feedback using CSS classes for valid and invalid inputs. Submitted data is displayed on the same page if validation is successful.
 
<p align= "center">
    <img src="https://github.com/KPlanisphere/web-dev-exam/assets/60454942/1bdbe1b2-3972-41b7-855f-8d2c8cdf2d4d" style="width: 70%; height: auto;">
</p>

- **Instructions:**
  1. Perform form validation to ensure that the fields (Username, Email, and Password) are not left blank.
  2. Highlight the field in red and display an icon and message if a field is left blank.
  3. Highlight the field in green and display an icon if the validation is correct.
  4. Display the entered data on the right side once all fields are validated and not empty.

- **Code Snippets:**

	**Form structure with fields for username, email, and password:**
	
    ```html
	  <form id="miFormulario">
	      <h1>Login</h1>
	      <div class="form-group">
	          <label for="usuario">Nombre de Usuario:</label>
	          <input type="text" class="form-control" id="usuario" name="usuario">
	      </div>
	      <button type="submit" class="btn btn-primary">Enviar</button>
	  </form>
    ```

	**CSS for valid and invalid input fields:**

	```css
	/* Formulario/style.css */
	.valido {
	    border: 2px solid green;
	}

	.invalido {
	    border: 2px solid red;
	}
	```
	 
	**JavaScript to validate form fields and display results:**

	```js
	// Formulario/script.js
	// JavaScript to validate form fields and display results
	document.getElementById('miFormulario').addEventListener('submit', function(event) {
	    event.preventDefault();
	    var usuario = document.getElementById('usuario');
	    var esValido = true;
	    if (usuario.value.trim() === '') {
	        usuario.classList.add('invalido');
	        esValido = false;
	    } else {
	        usuario.classList.remove('invalido');
	        usuario.classList.add('valido');
	    }
	});
	```
#### Problem 2: HTML Calculator

-   **Files:**
    
    -   `Calculadora/index.html`: The main HTML file containing the calculator.
    -   `Calculadora/style.css`: Custom CSS styles for the calculator.
    -   `Calculadora/script.js`: JavaScript file for calculator functionality.
-   **Description:**
    
    -   This exercise includes a simple calculator application that performs basic arithmetic operations. The calculator interface is built using HTML and styled with CSS. JavaScript functions handle the operations and display the results.
 
<p align= "center">
    <img src="https://github.com/KPlanisphere/web-dev-exam/assets/60454942/bed0d612-e3e8-4aba-8058-a167b7ca6a8e" style="width: 30%; height: auto;">
</p>

-   **Instructions:**
    
    1.  Create a calculator that performs addition, subtraction, multiplication, and division.
    2.  Ensure a number cannot start with 0 and only one decimal point can be entered.
-   **Code Snippets:**
    
    **Calculator layout with buttons and display:**
    
    ```html
    <!-- Calculadora/index.html -->
    <div class="calculator">
        <input type="text" class="form-control calc-display" id="calc-display" disabled>
        <div class="row">
            <button class="btn btn-secondary col" onclick="appendNumber('7')">7</button>
            <button class="btn btn-secondary col" onclick="appendNumber('8')">8</button>
            <button class="btn btn-primary col" onclick="setOperation('/')">/</button>
        </div>
    </div>
    ```
    
    **CSS for calculator layout and buttons:**
    
    ```css
    /* Calculadora/style.css */
    .calculator {
        width: 300px;
        margin: 50px auto;
        padding: 10px;
    }
    
    .button {
        height: 60px;
        font-size: 24px;
    }
    ```
    
    **JavaScript functions for calculator operations:**
    
    ```javascript
    // Calculadora/script.js
    let valorActual = '';
    function appendNumber(number) {
        if (number === '.' && valorActual.includes('.')) return;
        valorActual += number;
        document.getElementById('calc-display').value = valorActual;
    }
    
    function setOperation(operator) {
        if (valorActual === '') return;
        valorAnterior = valorActual;
        valorActual = '';
        operacionActual = operator;
    }
    ```
    

### Setup and Usage

1.  **Clone the Repository:**
    
    ```sh
    git clone https://github.com/KPlanisphere/web-dev-exam.git
    cd web-dev-exam
    ```
    
2.  **Open the HTML Files:**
    
    -   Open `Formulario/index.html` to view the form validation exercise.
    -   Open `Calculadora/index.html` to view the calculator exercise.
