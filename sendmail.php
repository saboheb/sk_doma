<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require 'phpmailer/src/Exception.php';
  require 'phpmailer/src/PHPMailer.php';

  $mail = new PHPMailer(true);
  $mail->CharSet = 'UTF-8';
  $mail->setLanguage('ru', 'phpmailer/language/');
  $mail->IsHTML(true);


  $mail->setFrom('info@скдома18.рф', 'скдома18');// от кого 
  $mail->addAddress('skdoma18@mail.ru'); // куда отправить
  $mail->Subject = 'Новая заявка';

  $body = 'Заявка с сайта';

  $body.='<p><strong>Имя:</storng> '.$_POST['name'].'<p>';
  $body.='<p><strong>Телефон:</strong> '.$_POST['phone'].'<p>';

  $mail->Body = Sbody;

  // отправка
  if (!$mail->send()) {
    $message = 'Ошибка';
  } else {
    $message = 'Данные отправлены!';
  }

  $response = ['message' => @message];

  header('Content-type: application/json');
  echo json_encode($response);
?>