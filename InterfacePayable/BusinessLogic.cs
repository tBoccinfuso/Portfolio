using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
namespace InterfacePayable
{
    public interface IPayable
    {
        decimal GetPaymentAmount();
    }

    public class Invoice : IPayable
    {
        // private fields
        private int quantity = 0;
        private decimal pricePerItem = 0;
        private string partDescription = "Unknown";

        // public properties
        public int Quantity
        {
            get { return quantity; }
            set { quantity = (value >= 0) ? value : 0; }
        }
        public decimal PricePerItem
        {
            get { return pricePerItem; }
            set { pricePerItem = (value >= 0) ? value : 0; }
        }
        public string PartDescription
        {
            get { return partDescription; }
            set { partDescription = value; }
        }

        // constructor
        public Invoice(int quantity, decimal pricePerItem, string partDescription)
        {
            Quantity = quantity;
            PricePerItem = pricePerItem;
            PartDescription = partDescription;
        }

        // overridden base class ToString()
        public override string ToString()
        {
            return "Part Description: " + partDescription +
                   "\nPrice Per Item: " + pricePerItem.ToString("C2") +
                   "\nQuantity: " + quantity;
        }

        // method implemented from IPayable
        public decimal GetPaymentAmount()
        {
            return quantity * pricePerItem;
        }
    }

    public class Employee : IPayable
    {
        // private fields
        private string name = "Un Known";
        private double hoursWorked = 0;
        private decimal hourlyRate = 0;

        // public properties
        public string Name
        {
            get { return name; }
            set { name = (value.Split().Length >= 2) ? value : "Un Known"; }
        }
        public double HoursWorked
        {
            get { return hoursWorked; }
            set { hoursWorked = (value >= 0) ? value : 0; }
        }
        public decimal HourlyRate
        {
            get { return hourlyRate; }
            set { hourlyRate = (value >= 0) ? value : 0; }
        }

        // constructor
        public Employee(string name, double hoursWorked, decimal hourlyRate)
        {
            Name = name;
            HoursWorked = hoursWorked;
            HourlyRate = hourlyRate;
        }

        // overridden base class ToString()
        public override string ToString()
        {
            return "Employee Name: " + name + 
                   "\nHourly Rate: " + hourlyRate.ToString("C2") +
                   "\nHours Worked: " + hoursWorked;
        }

        // method implemented from IPayable
        public decimal GetPaymentAmount()
        {
            return hourlyRate * (decimal)hoursWorked;
        }
    }
}
