<?php

if (isset($_GET['email']) && $_GET['email'] != "") {
    $email = $_GET['email'];
    $email_list = fopen("../../resources/mailing_list.txt", "a");
    fwrite($email_list, $email . "\n");
    fclose($email_list);

    $subject = 'New mailing recipient';
    $body = $email . ' has signed up for the mailing list.' . ' The entire mailing list is at http://www.moonfoxfarm.com/resources/mailing_list.txt';

    mail('moonfoxfarm@gmail.com', $subject, $body);
    #mail('alex.heritier@gmail.com', $subject, $body);
}
