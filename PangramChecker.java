
import java.util.HashSet;
import java.util.Scanner;
public class PangramChecker {

    public static boolean isPangram(String input) {
        // Create a set to store unique characters
        HashSet<Character> characterSet = new HashSet<>();

        // Convert the input to lowercase for case-insensitive comparison
        input = input.toLowerCase();

        // Iterate through each character in the input and add it to the set
        for (char c : input.toCharArray()) {
            if (Character.isLetter(c)) {
                characterSet.add(c);
            }
        }

        // Check if the size of the set is 26 (number of letters in the alphabet)
        return characterSet.size() == 26;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String input = scanner.nextLine();

        if (isPangram(input)) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }

        scanner.close();
    }
}
