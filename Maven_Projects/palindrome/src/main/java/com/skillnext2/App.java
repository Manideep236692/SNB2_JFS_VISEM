package com.skillnext2;

import java.util.Scanner;

/**
 * Palindrome Number Checker
 *
 */
public class App 
{
    /**
     * Check if a number is a palindrome
     * @param num The number to check
     * @return true if palindrome, false otherwise
     */
    public static boolean isPalindrome(int num) {
        String numStr = String.valueOf(num);
        String reversed = new StringBuilder(numStr).reverse().toString();
        return numStr.equals(reversed);
    }
    
    public static void main( String[] args )
    {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("=== Palindrome Number Checker ===");
        System.out.print("Enter a number: ");
        int number = scanner.nextInt();
        
        if (isPalindrome(number)) {
            System.out.println(number + " is a palindrome!");
        } else {
            System.out.println(number + " is not a palindrome.");
        }
        
        scanner.close();
    }
}
