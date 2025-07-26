
function convert() {
    //   const category = document.getElementById("category");
    //   const fromUnit = document.getElementById("fromUnit");
    //   const toUnit = document.getElementById("toUnit");
    //   const inp = document.getElementById("inp");
    //   const result1 = document.getElementById("result1");

    if (category.value === "length") {
        if (fromUnit.value === 'Meter' && toUnit.value === 'Kilometer') {
            result1.value = inp.value / 1000;
        } else if (fromUnit.value === 'Meter' && toUnit.value === 'Centimeter') {
            result1.value = inp.value * 100;
        } else if (fromUnit.value === 'Meter' && toUnit.value === 'Millimeter') {
            result1.value = inp.value * 1000;
        } else if (fromUnit.value === 'Meter' && toUnit.value === 'Inch') {
            result1.value = inp.value * 39.3701;
        } else if (fromUnit.value === 'Meter' && toUnit.value === 'Foot') {
            result1.value = inp.value * 3.28084;
        } else if (fromUnit.value === 'Meter' && toUnit.value === 'Yard') {
            result1.value = inp.value * 1.09361;
        } else if (fromUnit.value === 'Meter' && toUnit.value === 'Mile') {
            result1.value = inp.value / 1609.34;
        } else if (fromUnit.value === 'Kilometer' && toUnit.value === 'Meter') {
            result1.value = inp.value * 1000;
        } else if (fromUnit.value === 'Kilometer' && toUnit.value === 'Centimeter') {
            result1.value = inp.value * 100000;
        } else if (fromUnit.value === 'Kilometer' && toUnit.value === 'Millimeter') {
            result1.value = inp.value * 1000000;
        } else if (fromUnit.value === 'Kilometer' && toUnit.value === 'Inch') {
            result1.value = inp.value * 39370.1;
        } else if (fromUnit.value === 'Kilometer' && toUnit.value === 'Foot') {
            result1.value = inp.value * 3280.84;
        } else if (fromUnit.value === 'Kilometer' && toUnit.value === 'Yard') {
            result1.value = inp.value * 1093.61;
        } else if (fromUnit.value === 'Kilometer' && toUnit.value === 'Mile') {
            result1.value = inp.value * 0.621371;
        } else if (fromUnit.value === 'Centimeter' && toUnit.value === 'Meter') {
            result1.value = inp.value / 100;
        } else if (fromUnit.value === 'Centimeter' && toUnit.value === 'Kilometer') {
            result1.value = inp.value / 100000;
        } else if (fromUnit.value === 'Centimeter' && toUnit.value === 'Millimeter') {
            result1.value = inp.value * 10;
        } else if (fromUnit.value === 'Centimeter' && toUnit.value === 'Inch') {
            result1.value = inp.value / 2.54;
        } else if (fromUnit.value === 'Centimeter' && toUnit.value === 'Foot') {
            result1.value = inp.value / 30.48;
        } else if (fromUnit.value === 'Centimeter' && toUnit.value === 'Yard') {
            result1.value = inp.value / 91.44;
        } else if (fromUnit.value === 'Centimeter' && toUnit.value === 'Mile') {
            result1.value = inp.value / 160934;
        } else if (fromUnit.value === 'Millimeter' && toUnit.value === 'Meter') {
            result1.value = inp.value / 1000;
        } else if (fromUnit.value === 'Millimeter' && toUnit.value === 'Kilometer') {
            result1.value = inp.value / 1000000;
        } else if (fromUnit.value === 'Millimeter' && toUnit.value === 'Centimeter') {
            result1.value = inp.value / 10;
        } else if (fromUnit.value === 'Millimeter' && toUnit.value === 'Inch') {
            result1.value = inp.value / 25.4;
        } else if (fromUnit.value === 'Millimeter' && toUnit.value === 'Foot') {
            result1.value = inp.value / 304.8;
        } else if (fromUnit.value === 'Millimeter' && toUnit.value === 'Yard') {
            result1.value = inp.value / 914.4;
        } else if (fromUnit.value === 'Millimeter' && toUnit.value === 'Mile') {
            result1.value = inp.value / 1609344;
        } else if (fromUnit.value === 'Inch' && toUnit.value === 'Meter') {
            result1.value = inp.value * 0.0254;
        } else if (fromUnit.value === 'Inch' && toUnit.value === 'Kilometer') {
            result1.value = inp.value * 0.0000254;
        } else if (fromUnit.value === 'Inch' && toUnit.value === 'Centimeter') {
            result1.value = inp.value * 2.54;
        } else if (fromUnit.value === 'Inch' && toUnit.value === 'Millimeter') {
            result1.value = inp.value * 25.4;
        } else if (fromUnit.value === 'Inch' && toUnit.value === 'Foot') {
            result1.value = inp.value / 12;
        } else if (fromUnit.value === 'Inch' && toUnit.value === 'Yard') {
            result1.value = inp.value / 36;
        } else if (fromUnit.value === 'Inch' && toUnit.value === 'Mile') {
            result1.value = inp.value / 63360;
        } else if (fromUnit.value === 'Foot' && toUnit.value === 'Meter') {
            result1.value = inp.value * 0.3048;
        } else if (fromUnit.value === 'Foot' && toUnit.value === 'Kilometer') {
            result1.value = inp.value * 0.0003048;
        } else if (fromUnit.value === 'Foot' && toUnit.value === 'Centimeter') {
            result1.value = inp.value * 30.48;
        } else if (fromUnit.value === 'Foot' && toUnit.value === 'Millimeter') {
            result1.value = inp.value * 304.8;
        } else if (fromUnit.value === 'Foot' && toUnit.value === 'Inch') {
            result1.value = inp.value * 12;
        } else if (fromUnit.value === 'Foot' && toUnit.value === 'Yard') {
            result1.value = inp.value / 3;
        } else if (fromUnit.value === 'Foot' && toUnit.value === 'Mile') {
            result1.value = inp.value / 5280;
        } else if (fromUnit.value === 'Yard' && toUnit.value === 'Meter') {
            result1.value = inp.value * 0.9144;
        } else if (fromUnit.value === 'Yard' && toUnit.value === 'Kilometer') {
            result1.value = inp.value * 0.0009144;
        } else if (fromUnit.value === 'Yard' && toUnit.value === 'Centimeter') {
            result1.value = inp.value * 91.44;
        } else if (fromUnit.value === 'Yard' && toUnit.value === 'Millimeter') {
            result1.value = inp.value * 914.4;
        } else if (fromUnit.value === 'Yard' && toUnit.value === 'Inch') {
            result1.value = inp.value * 36;
        } else if (fromUnit.value === 'Yard' && toUnit.value === 'Foot') {
            result1.value = inp.value * 3;
        } else if (fromUnit.value === 'Yard' && toUnit.value === 'Mile') {
            result1.value = inp.value / 1760;
        } else if (fromUnit.value === 'Mile' && toUnit.value === 'Meter') {
            result1.value = inp.value * 1609.34;
        } else if (fromUnit.value === 'Mile' && toUnit.value === 'Kilometer') {
            result1.value = inp.value * 1.60934;
        } else if (fromUnit.value === 'Mile' && toUnit.value === 'Centimeter') {
            result1.value = inp.value * 160934;
        } else if (fromUnit.value === 'Mile' && toUnit.value === 'Millimeter') {
            result1.value = inp.value * 1609340;
        } else if (fromUnit.value === 'Mile' && toUnit.value === 'Inch') {
            result1.value = inp.value * 63360;
        } else if (fromUnit.value === 'Mile' && toUnit.value === 'Foot') {
            result1.value = inp.value * 5280;
        } else if (fromUnit.value === 'Mile' && toUnit.value === 'Yard') {
            result1.value = inp.value * 1760;
        } else {
            result1.value = inp.value;
        }
    } else if (category.value === "weight") {
        const value = parseFloat(inp.value);

        if (fromUnit.value === "Milligram") {
            if (toUnit.value === "Gram") result1.value = value / 1000;
            else if (toUnit.value === "Kilogram") result1.value = value / 1e6;
            else if (toUnit.value === "Metric ton") result1.value = value / 1e9;
            else if (toUnit.value === "Pound") result1.value = value * 0.00000220462;
            else if (toUnit.value === "Ounce") result1.value = value * 0.000035274;
            else if (toUnit.value === "Stone") result1.value = value * 0.00000015747;
            else result1.value = value;
        }

        else if (fromUnit.value === "Gram") {
            if (toUnit.value === "Milligram") result1.value = value * 1000;
            else if (toUnit.value === "Kilogram") result1.value = value / 1000;
            else if (toUnit.value === "Metric ton") result1.value = value / 1e6;
            else if (toUnit.value === "Pound") result1.value = value * 0.00220462;
            else if (toUnit.value === "Ounce") result1.value = value * 0.035274;
            else if (toUnit.value === "Stone") result1.value = value * 0.00015747;
            else result1.value = value;
        }

        else if (fromUnit.value === "Kilogram") {
            if (toUnit.value === "Milligram") result1.value = value * 1e6;
            else if (toUnit.value === "Gram") result1.value = value * 1000;
            else if (toUnit.value === "Metric ton") result1.value = value / 1000;
            else if (toUnit.value === "Pound") result1.value = value * 2.20462;
            else if (toUnit.value === "Ounce") result1.value = value * 35.274;
            else if (toUnit.value === "Stone") result1.value = value * 0.15747;
            else result1.value = value;
        }

        else if (fromUnit.value === "Metric ton") {
            if (toUnit.value === "Milligram") result1.value = value * 1e9;
            else if (toUnit.value === "Gram") result1.value = value * 1e6;
            else if (toUnit.value === "Kilogram") result1.value = value * 1000;
            else if (toUnit.value === "Pound") result1.value = value * 2204.62;
            else if (toUnit.value === "Ounce") result1.value = value * 35274;
            else if (toUnit.value === "Stone") result1.value = value * 157.47;
            else result1.value = value;
        }

        else if (fromUnit.value === "Pound") {
            if (toUnit.value === "Milligram") result1.value = value * 453592;
            else if (toUnit.value === "Gram") result1.value = value * 453.592;
            else if (toUnit.value === "Kilogram") result1.value = value * 0.453592;
            else if (toUnit.value === "Metric ton") result1.value = value / 2204.62;
            else if (toUnit.value === "Ounce") result1.value = value * 16;
            else if (toUnit.value === "Stone") result1.value = value / 14;
            else result1.value = value;
        }

        else if (fromUnit.value === "Ounce") {
            if (toUnit.value === "Milligram") result1.value = value * 28349.5;
            else if (toUnit.value === "Gram") result1.value = value * 28.3495;
            else if (toUnit.value === "Kilogram") result1.value = value * 0.0283495;
            else if (toUnit.value === "Metric ton") result1.value = value / 35274;
            else if (toUnit.value === "Pound") result1.value = value / 16;
            else if (toUnit.value === "Stone") result1.value = value / 224;
            else result1.value = value;
        }

        else if (fromUnit.value === "Stone") {
            if (toUnit.value === "Milligram") result1.value = value * 6.35029e+6;
            else if (toUnit.value === "Gram") result1.value = value * 6350.29;
            else if (toUnit.value === "Kilogram") result1.value = value * 6.35029;
            else if (toUnit.value === "Metric ton") result1.value = value / 157.47;
            else if (toUnit.value === "Pound") result1.value = value * 14;
            else if (toUnit.value === "Ounce") result1.value = value * 224;
            else result1.value = value;
        }
    }else if (category.value === "temperature") {
        const value = parseFloat(inp.value);

    if (fromUnit.value === "Celsius" && toUnit.value === "Fahrenheit") {
        result1.value = (value * 9/5) + 32;
    } else if (fromUnit.value === "Celsius" && toUnit.value === "Kelvin") {
        result1.value = value + 273.15;
    } else if (fromUnit.value === "Fahrenheit" && toUnit.value === "Celsius") {
        result1.value = (value - 32) * 5/9;
    } else if (fromUnit.value === "Fahrenheit" && toUnit.value === "Kelvin") {
        result1.value = (value - 32) * 5/9 + 273.15;
    } else if (fromUnit.value === "Kelvin" && toUnit.value === "Celsius") {
        result1.value = value - 273.15;
    } else if (fromUnit.value === "Kelvin" && toUnit.value === "Fahrenheit") {
        result1.value = (value - 273.15) * 9/5 + 32;
    } else {
        // Same unit conversion
        result1.value = value;
    }
}


}

