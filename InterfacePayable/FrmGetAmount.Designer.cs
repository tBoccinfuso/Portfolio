namespace InterfacePayable
{
    partial class FrmGetAmount
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
            this.btnList = new System.Windows.Forms.Button();
            this.btnTotal = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // btnList
            // 
            this.btnList.Location = new System.Drawing.Point(59, 12);
            this.btnList.Name = "btnList";
            this.btnList.Size = new System.Drawing.Size(138, 34);
            this.btnList.TabIndex = 0;
            this.btnList.Text = "Display List";
            this.btnList.UseVisualStyleBackColor = true;
            this.btnList.Click += new System.EventHandler(this.btnList_Click);
            // 
            // btnTotal
            // 
            this.btnTotal.Location = new System.Drawing.Point(59, 64);
            this.btnTotal.Name = "btnTotal";
            this.btnTotal.Size = new System.Drawing.Size(138, 34);
            this.btnTotal.TabIndex = 1;
            this.btnTotal.Text = "Total Payable";
            this.btnTotal.UseVisualStyleBackColor = true;
            this.btnTotal.Click += new System.EventHandler(this.btnTotal_Click);
            // 
            // FrmGetAmount
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(256, 113);
            this.Controls.Add(this.btnTotal);
            this.Controls.Add(this.btnList);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedSingle;
            this.MaximizeBox = false;
            this.Name = "FrmGetAmount";
            this.Text = "Get Payment Amount";
            this.Load += new System.EventHandler(this.FrmGetAmount_Load);
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Button btnList;
        private System.Windows.Forms.Button btnTotal;
    }
}

