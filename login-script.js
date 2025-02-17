/* Membuat Variabel untuk setiap elemen view */
const loginFormElement = document.querySelector("#loginForm");
const inputEmailElement = document.querySelector("#inputEmail");
const inputPasswordElement = document.querySelector("#inputPassword");

/* Membuat variabel untuk menyimpan informasi email dan password */
const expectedEmail = "zakiraff@gmail.com";
const expectedPassword = "zakiraff";

/* Menambahkan aksi klik pada button */
loginFormElement.addEventListener("submit", function (event) {
  event.preventDefault();

  /* Mendapatkan nilai dari masing-masing input (email dan password) ketika tombol ditekan */
  const email = inputEmailElement.value;
  const password = inputPasswordElement.value;

  /* Memastikan bahwa nilai email dan password sesuai dengan nilai yang tersimpan */
  if (email == expectedEmail && password == expectedPassword) {
    /* Jikas sesuai maka program akan berpindah ke halaman home */
    goToHome();
  } else {
    /* Namun jika tidak sesuai maka akan menampilkan informasi bahwa input salah */
    showPopUp();
  }
});

