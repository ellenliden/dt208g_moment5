import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  onSubmit() {
    console.log('Form submitted:', this.contactForm);
    // Här kan du lägga till logik för att skicka formuläret
    alert('Tack för ditt meddelande! Vi återkommer så snart som möjligt.');

    // Återställ formuläret
    this.contactForm = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  }
}
