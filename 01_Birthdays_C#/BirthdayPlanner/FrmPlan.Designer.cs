namespace BirthdayPlanner
{
    partial class FrmPlan
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.txtName = new System.Windows.Forms.TextBox();
            this.txtBirthday = new System.Windows.Forms.TextBox();
            this.btnBirthday = new System.Windows.Forms.Button();
            this.btnBirthdays2 = new System.Windows.Forms.Button();
            this.btnListNames2 = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(32, 15);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(38, 13);
            this.label1.TabIndex = 0;
            this.label1.Text = "&Name:";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(32, 47);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(48, 13);
            this.label2.TabIndex = 2;
            this.label2.Text = "&Birthday:";
            // 
            // txtName
            // 
            this.txtName.Location = new System.Drawing.Point(86, 12);
            this.txtName.Name = "txtName";
            this.txtName.Size = new System.Drawing.Size(125, 20);
            this.txtName.TabIndex = 1;
            // 
            // txtBirthday
            // 
            this.txtBirthday.Location = new System.Drawing.Point(86, 44);
            this.txtBirthday.Name = "txtBirthday";
            this.txtBirthday.Size = new System.Drawing.Size(125, 20);
            this.txtBirthday.TabIndex = 3;
            // 
            // btnBirthday
            // 
            this.btnBirthday.Location = new System.Drawing.Point(12, 83);
            this.btnBirthday.Name = "btnBirthday";
            this.btnBirthday.Size = new System.Drawing.Size(75, 36);
            this.btnBirthday.TabIndex = 4;
            this.btnBirthday.Text = "&Add Birthday";
            this.btnBirthday.UseVisualStyleBackColor = true;
            this.btnBirthday.Click += new System.EventHandler(this.btnBirthday_Click);
            // 
            // btnBirthdays2
            // 
            this.btnBirthdays2.DialogResult = System.Windows.Forms.DialogResult.Cancel;
            this.btnBirthdays2.Location = new System.Drawing.Point(93, 83);
            this.btnBirthdays2.Name = "btnBirthdays2";
            this.btnBirthdays2.Size = new System.Drawing.Size(75, 36);
            this.btnBirthdays2.TabIndex = 5;
            this.btnBirthdays2.Text = "&Display Birthdays";
            this.btnBirthdays2.UseVisualStyleBackColor = true;
            this.btnBirthdays2.Click += new System.EventHandler(this.btnBirthdays2_Click);
            // 
            // btnListNames2
            // 
            this.btnListNames2.Location = new System.Drawing.Point(174, 83);
            this.btnListNames2.Name = "btnListNames2";
            this.btnListNames2.Size = new System.Drawing.Size(75, 36);
            this.btnListNames2.TabIndex = 7;
            this.btnListNames2.Text = "Display &List";
            this.btnListNames2.UseVisualStyleBackColor = true;
            this.btnListNames2.Click += new System.EventHandler(this.btnListNames2_Click);
            // 
            // FrmPlan
            // 
            this.AcceptButton = this.btnBirthday;
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.CancelButton = this.btnBirthdays2;
            this.ClientSize = new System.Drawing.Size(261, 133);
            this.Controls.Add(this.btnListNames2);
            this.Controls.Add(this.btnBirthdays2);
            this.Controls.Add(this.btnBirthday);
            this.Controls.Add(this.txtBirthday);
            this.Controls.Add(this.txtName);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedSingle;
            this.MaximizeBox = false;
            this.Name = "FrmPlan";
            this.Text = "Birthday Planner";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.TextBox txtName;
        private System.Windows.Forms.TextBox txtBirthday;
        private System.Windows.Forms.Button btnBirthday;
        private System.Windows.Forms.Button btnBirthdays2;
        private System.Windows.Forms.Button btnListNames2;
    }
}

