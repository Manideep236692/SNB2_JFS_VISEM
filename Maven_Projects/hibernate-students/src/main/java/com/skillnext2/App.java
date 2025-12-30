package com.skillnext2;

import org.hibernate.Session;
import org.hibernate.Transaction;
import java.util.Scanner;

public class App {

    static Scanner sc = new Scanner(System.in);

    public static void main(String[] args) {

        while (true) {
            System.out.println("\n1.Insert  2.View  3.Update  4.Delete  5.Exit");
            int choice = sc.nextInt();
            sc.nextLine(); // consume newline

            switch (choice) {
                case 1:
                    insertStudent();
                    break;
                case 2:
                    viewStudent();
                    break;
                case 3:
                    updateStudent();
                    break;
                case 4:
                    deleteStudent();
                    break;
                case 5:
                    System.exit(0);
                    break;
                default:
                    System.out.println("Invalid Choice");
                    break;
            }
        }
    }

    static void insertStudent() {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            Transaction tx = session.beginTransaction();

            Student s = new Student();
            System.out.print("Name: ");
            s.setName(sc.nextLine());
            System.out.print("Email: ");
            s.setEmail(sc.nextLine());
            System.out.print("Branch: ");
            s.setBranch(sc.nextLine());

            session.persist(s);
            tx.commit();
        } catch (Exception e) {
            System.out.println("Error inserting student: " + e.getMessage());
        }
    }

    static void viewStudent() {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            System.out.print("Enter ID: ");
            int id = sc.nextInt();
            sc.nextLine(); // consume newline

            Student s = session.get(Student.class, id);
            if (s != null)
                System.out.println(s.getId() + " " + s.getName() + " " + s.getEmail() + " " + s.getBranch());
            else
                System.out.println("Student not found");
        } catch (Exception e) {
            System.out.println("Error viewing student: " + e.getMessage());
        }
    }

    static void updateStudent() {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            Transaction tx = session.beginTransaction();

            System.out.print("Enter ID: ");
            int id = sc.nextInt();
            sc.nextLine();
            Student s = session.get(Student.class, id);

            if (s != null) {
                System.out.print("New Name: ");
                s.setName(sc.nextLine());
                System.out.print("New Email: ");
                s.setEmail(sc.nextLine());
                System.out.print("New Branch: ");
                s.setBranch(sc.nextLine());
            } else {
                System.out.println("Student not found");
            }

            tx.commit();
        } catch (Exception e) {
            System.out.println("Error updating student: " + e.getMessage());
        }
    }

    static void deleteStudent() {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            Transaction tx = session.beginTransaction();

            System.out.print("Enter ID: ");
            int id = sc.nextInt();
            sc.nextLine();
            Student s = session.get(Student.class, id);

            if (s != null)
                session.delete(s);
            else
                System.out.println("Student not found");

            tx.commit();
        } catch (Exception e) {
            System.out.println("Error deleting student: " + e.getMessage());
        }
    }
}
