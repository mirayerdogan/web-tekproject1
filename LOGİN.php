<?php
session_start();

function checkCredentials($username, $password) {


    if (!filter_var($username, FILTER_VALIDATE_EMAIL)) {
        return false; 
    }


    $usernameParts = explode('@', $username);
    $usernameWithoutDomain = $usernameParts[0];
    if ($password !== $usernameWithoutDomain) {
        return false; 
    }

    return true;
}


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  
    $username = $_POST['username'];
    $password = $_POST['password'];


    if (!empty($username) && !empty($password)) {
 
        if (checkCredentials($username, $password)) {
          
            echo "Hoşgeldiniz $username!";
            exit; 
        } else {
          
            header('Location: LOGİN.php');
            exit; 
        }
    } else {
        
        header('Location: LOGİN.php');
        exit; 
    }
}
?>


<form method="POST" action="">
    <label for="username">Kullanıcı Adı (E-posta):</label>
    <input type="email" name="username" id="username" required>
    <br>
    <label for="password">Şifre:</label>
    <input type="password" name="password" id="password" required>
    <br>
    <input type="submit" value="Giriş Yap">
</form>