import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        MaxHeap<Order> dash = new MaxHeap<>(4);

        Item crunchwrap = new Item("crunchwrap", 45);
        Item quesadilla = new Item("quesadilla", 35);
        Item crunchyTaco = new Item("crunchy-taco", 8);
        Item grlChzBurr = new Item("grilled-cheese-burrito", 60);

        ArrayList<Item> food0 = new ArrayList<>(List.of(grlChzBurr, crunchwrap));
        ArrayList<Item> food1 = new ArrayList<>(List.of(crunchyTaco));
        ArrayList<Item> food2 = new ArrayList<>(List.of(grlChzBurr, crunchwrap));
        ArrayList<Item> food3 = new ArrayList<>(List.of(grlChzBurr, crunchwrap));

        Order order1 = new Order(0, food0);
        Order order2 = new Order(1, food1);
        Order order3 = new Order(2, food2);
        Order order4 = new Order(3, food3);

        dash.insert(order1);
        System.out.println(dash);
        dash.insert(order2);
        System.out.println(dash);
        dash.insert(order3);
        System.out.println(dash);
        dash.insert(order4);
        System.out.println(dash);

        while (!dash.isEmpty()) {
            dash.remove();
            System.out.println(dash);
        }
    }
}