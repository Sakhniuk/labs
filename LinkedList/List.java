package Linked;

public class LinkedList {
    public class Node {
        public int data;
        public Node next;

        public Node(int data){
            this.data=data;
            next=null;
        }
    }
    private Node head;
    public LinkedList() {
        head = null;
    }
    public void add(int data) {
        Node newNode = new Node(data);
        if (head == null) {
            head = newNode;
        } else {
            Node current = head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
    public void printList() {
        if (head == null) {
            System.out.println("Список порожній");
            return;
        }
        Node current = head;
        while (current != null) {
            System.out.print(current.data + " -> ");
            current = current.next;
        }
        System.out.println("null");
    }
    public void removeFirst() {
        if (head == null) {
            System.out.println("Список порожній. Немає елементів для видалення.");
            return;
        }
        head = head.next;
    }
    public void removeElement(int value) {
        if (head == null) {
            System.out.println("Список порожній. Немає елементів для видалення.");
            return;
        }
        if (head.data == value) {
            head = head.next;
            return;
        }

        Node current = head;

        while (current.next != null) {
            if (current.next.data == value) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }

        System.out.println("Елемент " + value + " не знайдено в списку.");
    }

    public int size() {
        int count = 0;
        Node current = head;
        while (current != null) {
            count++;
            current = current.next;
        }
        return count;
    }

    public static void main(String[] args) {
        LinkedList list = new LinkedList();
        list.add(10);
        list.add(20);
        list.add(30);
        list.add(40);

        System.out.println("Список після додавання елементів:");
        list.printList();

        list.removeFirst();
        System.out.println("Список після видалення першого елемента:");
        list.printList();

        list.removeElement(30);
        System.out.println("Список після видалення елемента 30:");
        list.printList();

        System.out.println("Розмір списку: " + list.size());
    }
}