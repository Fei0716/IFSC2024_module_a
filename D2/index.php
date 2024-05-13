<?php
$numbers = range(1, 40);

function formatNumber($index, $num)
{
    return "[$index] => $num";
}

$formattedNumbers = array_map('formatNumber', array_keys($numbers), $numbers);

echo "Original Array<br>(<br> &ensp; " . implode(",<br>&ensp; ", $formattedNumbers) . "<br>)<br>";

if (isset($_GET['factor'])) {
    $factor = $_GET['factor'];
    $modifyNumbers = function ($index, $num) use ($factor) {
        if ($num % $factor == 0) {
            return "[$index] => $num is a multiple of $factor **";
        }
        return "[$index] => $num";
    };
    $modifiedNumbers = array_map($modifyNumbers, array_keys($numbers), $numbers);
    echo "Modified Array<br>(<br> &ensp; " . implode(",<br>&ensp; ", $modifiedNumbers) . "<br>)<br>";
}
?>