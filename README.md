# React Calculator

A simple, responsive calculator built with *React*.  
It performs basic arithmetic operations and has a clean grid-based layout styled using CSS.

---

##  Features
- Supports addition, subtraction, multiplication, and division  
- “AC” button clears all input  
- “DEL” button removes the last digit  
- “=” button calculates the result  
- Responsive and clean UI using CSS Grid  
- Handles invalid input gracefully (shows “Error”)

---

## How It Works
The calculator uses the React useState hook to manage the input value.  
The handleClick function updates the state based on button clicks:
- Adds digits and operators to the input  
- Uses eval() (for simplicity) to calculate expressions  
- Catches invalid expressions and displays an error  

---

## 🧩 File Structure
