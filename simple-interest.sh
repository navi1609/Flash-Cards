#!/bin/bash

# Script to calculate simple interest

echo "Enter Principal Amount:"
read principal

echo "Enter Rate of Interest (in %):"
read rate

echo "Enter Time Period (in years):"
read time

# Formula: Simple Interest = (Principal × Rate × Time) / 100
interest=$(echo "scale=2; ($principal * $rate * $time) / 100" | bc)

echo "-----------------------------------"
echo "Simple Interest = ₹$interest"
echo "-----------------------------------"
