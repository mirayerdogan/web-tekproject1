const formResult = JSON.parse(localStorage.getItem('formResult'));
console.log(formResult.name);
console.log(formResult.surname);
console.log(formResult.gender);
console.log(formResult.phone);
console.log(formResult.email);
console.log(formResult.subject);
console.log(formResult.message);

const app = new Vue({
    el: '#app',
    data() {
      return {
        formData: {
          name: '',
          surname: '',
          gender: '',
          phone: '',
          email: '',
          subject: '',
          message: '',
        },
        displayInfo: '',
      };
    },
    methods: {
      submitForm() {
        const {
          name,
          surname,
          gender,
          phone,
          email,
          subject,
          message,
        } = this.formData;
  
        if (
          name.trim() === '' ||
          surname.trim() === '' ||
          gender.trim() === '' ||
          phone.trim() === '' ||
          email.trim() === '' ||
          subject.trim() === '' ||
          message.trim() === ''
        ) {
          this.displayInfo = 'Lütfen tüm alanları doldurunuz.';
          return;
        }
  
        if (!this.validateEmail(email)) {
          this.displayInfo = 'Geçerli bir e-posta adresi giriniz.';
          return;
        }

        if (!this.validatePhone(phone)) {
          this.displayInfo = 'Geçerli bir telefon numarası giriniz. (11 haneli).';
          return;
        }
  
       
        const formResult = {
          name,
          surname,
          gender,
          phone,
          email,
          subject,
          message,
        };
  
        
        localStorage.setItem('formResult', JSON.stringify(formResult));
  
        
       window.Location.href='sonuc.html';
  
        
        this.resetForm();
      },
      resetForm() {
        this.formData = {
          name: '',
          surname: '',
          gender: '',
          phone: '',
          email: '',
          subject: '',
          message: '',
        };
      },
      validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
      },
    },

    validatePhone(phone) {
      const re = /^\d{11}$/;
      return re.test(phone);
    },

  });