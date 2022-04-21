public static void Main()
{
    int i = 0;
    while (i < 10)
    {
        Console.WriteLine(i);
        i++;
    }
}

public static int calculateDaysBetweenDates(date begin, date end) {
    int days = 0;
    while (begin < end) {
        begin = begin.AddDays(1);
        days++;
    }
    return days;
}

public static void findLowestNumber(int[] numbers) {
    int lowest = numbers[0];
    for (int i = 1; i < numbers.Length; i++) {
        if (numbers[i] < lowest) {
            lowest = numbers[i];
        }
    }
    Console.WriteLine(lowest);
}

public static void getUserFirstName() {
    Console.WriteLine("What is your first name?");
    string firstName = Console.ReadLine();
    Console.WriteLine("Hello, " + firstName);
}

