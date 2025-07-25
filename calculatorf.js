const result = document.getElementById("result");
let mode = "deg"; // default mode

function setMode(selectedMode) {
    mode = selectedMode;
    if (mode === "deg") {
        document.getElementById("degBtn").disabled = true;
        document.getElementById("radBtn").disabled = false;
    } else if (mode === "rad") {
        document.getElementById("degBtn").disabled = false;
        document.getElementById("radBtn").disabled = true;
    }
}

function display(num) {
    result.value += num;
}

function clearAll() {
    result.value = "";
}

function Back() {
    result.value = result.value.slice(0, -1);
}

function factorial(n) {
    if (n < 0) return NaN;
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// function equal() {
//     try {
//         let expression = result.value;
//         let matches = expression.match(/\d+!/g);  // ["5!", "3!"]
//         matches.forEach(factStr => {
//             let num = parseInt(factStr);         // num = 5 (from "5!")
//             expression = expression.replace(factStr, `factorial(${num})`);
//         });

//         // Step 1: Handle inverse trig functions FIRST
//         expression = expression
//             .replace(/sin⁻¹\(([^)]+)\)/g, function (match, value) {
//                 return `(Math.asin(${value}) * 180 / Math.PI)`;
//             })
//             .replace(/cos⁻¹\(([^)]+)\)/g, function (match, value) {
//                 return `(Math.acos(${value}) * 180 / Math.PI)`;
//             })
//             .replace(/tan⁻¹\(([^)]+)\)/g, function (match, value) {
//                 return `(Math.atan(${value}) * 180 / Math.PI)`;
//             });

//         // Step 2: Replace trig functions
//         if (mode === "deg") {
//             expression = expression
//                 .replace(/sin\(([^)]+)\)/g, (match, val) => `Math.sin((${val}) * Math.PI / 180)`)
//                 .replace(/cos\(([^)]+)\)/g, (match, val) => `Math.cos((${val}) * Math.PI / 180)`)
//                 .replace(/tan\(([^)]+)\)/g, (match, val) => `Math.tan((${val}) * Math.PI / 180)`);
//         } else {
//             expression = expression
//                 .replace(/sin/g, "Math.sin")
//                 .replace(/cos/g, "Math.cos")
//                 .replace(/tan/g, "Math.tan");
//         }

//         // Step 3: Replace other math functions
//         expression = expression
//             .replace(/√/g, "Math.sqrt")
//             .replace(/log/g, "Math.log10")
//             .replace(/ln/g, "Math.log");

//         // Step 4: Replace constants
//         expression = expression
//     .replace(/π/g, Math.PI.toString())
//     .replace(/e/g, Math.E.toString()); // use \b to match only standalone 'e'

//         // Step 5: Power and percentage
//         expression = expression.replace(/xʸ/g, "**").replace(/%/g, "/100");

//         // Final: Evaluate
//         result.value = parseFloat(eval(expression).toFixed(10));
//     } catch (error) {
//         result.value = "Error";
//         setTimeout(() => (result.value = ""), 1000);
//     }
// }
function equal() {
    try {
        let expression = result.value;

        // Handle factorials like 5!
        let matches = expression.match(/\d+!/g);
        if (matches) {
            matches.forEach(factStr => {
                let num = parseInt(factStr);
                expression = expression.replace(factStr, `factorial(${num})`);
            });
        }


        // Step 1: Handle inverse trig functions (with optional spaces)

        // Square root
        expression = expression.replace(/√\(([^)]+)\)/g, (match, value) => {
            const val = eval(value);
            return Math.sqrt(val).toFixed(10);
        });
        expression = expression.replace(/sin⁻¹\s*\(([^)]+)\)/g, (match, value) => {
            const val = eval(value);
            return (Math.asin(val) * 180 / Math.PI).toFixed(10);
        });
        expression = expression.replace(/cos⁻¹\s*\(([^)]+)\)/g, (match, value) => {
            const val = eval(value);
            return (Math.acos(val) * 180 / Math.PI).toFixed(10);
        });
        expression = expression.replace(/tan⁻¹\s*\(([^)]+)\)/g, (match, value) => {
            const val = eval(value);
            return (Math.atan(val) * 180 / Math.PI).toFixed(10);
        });




        // Step 2: Handle normal trig functions
        if (mode === "deg") {
            expression = expression
                .replace(/sin\s*\(([^)]+)\)/g, (match, val) => `Math.sin((${val}) * Math.PI / 180)`)
                .replace(/cos\s*\(([^)]+)\)/g, (match, val) => `Math.cos((${val}) * Math.PI / 180)`)
                .replace(/tan\s*\(([^)]+)\)/g, (match, val) => `Math.tan((${val}) * Math.PI / 180)`);
        } else {
            expression = expression
                .replace(/sin/g, "Math.sin")
                .replace(/cos/g, "Math.cos")
                .replace(/tan/g, "Math.tan");
        }

        // Step 3: Handle sqrt, log, ln
        expression = expression.replace(/log\s*\(([^)]+)\)/g, (match, value) => {

            const val = eval(value);
            return Math.log10(val).toFixed(10); // base-10 log

        });

        expression = expression.replace(/ln\s*\(([^)]+)\)/g, (match, value) => {
            
                const val = eval(value);
                return Math.log(val).toFixed(10); // natural log

        });

        // Step 4: Replace constants
        expression = expression
            .replace(/π/g, Math.PI.toString())
            .replace(/\be\b/g, Math.E.toString()); // use word boundary

        // Step 5: Power and percent
        expression = expression
            .replace(/xʸ/g, "**")
            .replace(/%/g, "/100");

        // Final: Evaluate
        result.value = parseFloat(eval(expression).toFixed(10));
    } catch (error) {
        result.value = "Error";
        setTimeout(() => (result.value = ""), 1000);
    }
}

