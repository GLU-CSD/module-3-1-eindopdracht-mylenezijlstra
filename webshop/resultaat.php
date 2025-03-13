<!doctype html>
<html class="no-js" lang="nl">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Gymshark</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <meta name="description" content="">

    <meta property="og:title" content="">
    <meta property="og:type" content="">
    <meta property="og:url" content="">
    <meta property="og:image" content="">
    <meta property="og:image:alt" content="">

    <link rel="icon" href="/favicon.ico" sizes="any">
    <link rel="icon" href="/icon.svg" type="image/svg+xml">
    <link rel="apple-touch-icon" href="icon.png">

    <meta name="theme-color" content="#fafafa">

    <!--style zodat de voorgaande prijs doorgestreept is en je ziet dat dat de oude prijs was-->
</head>

<body style="background-color: white;">



    <div id="content">

        <div class="bovenbalk">
            <div style="display:flex; margin-left:50px; background-color: rgb(163, 180, 248)">
                <!--kleur die hetzelde is als de achtergrond-->
                <div class="menuRight">Taal:</div>
                <select class="menuLeft" name="Taal" id="Taal">
                    <option value="Nederlands">Nederlands</option>
                    <!--verschillende talen voor de website-->
                    <option value="Duits">Duits</option>
                    <option value="Frans">Frans</option>
                    <option value="Spaans">Spaans</option>
                    <option value="Engels">Engels</option>
                </select>
            </div>
            <div style="display:flex; margin-right:50px; background-color: rgb(163, 180, 248);">


                <div class="topnav" id="myTopnav">
                    <!-- Links die je zichtbaar wilt maken in het hamburgermenu -->
                    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                        <i class="fa fa-bars"></i> <!-- Hamburger icoon -->
                    </a>
                    <a href="formulier.html">login</a>
                    <a href="formulier.html">registeren</a>
                    <a href="resultaat.php">mijn gegevens</a>
                    <!-- Hamburger icoon dat zichtbaar wordt op kleine schermen -->
                </div>

            </div>
        </div>

        <header>
            <div class="onderbalk">

                <div>
                    <!--Buitenste box-->

                    <div class="logo">
                        <!--De box waar logo gymshark links in te zien is-->
                        <img src="assets/img/logo1.jpg" alt="logo">
                    </div>

                    <div class="winkel">
                        <!--De box waar logo winkelwagen rechts in te zien is-->
                        <img src="assets/img/winkel1.jpg" alt="winkelwagen">
                    </div>

                    <div id="winkelwagenbolletje" class="bolletje">1</div>

                </div>
                <!--Buitenste box-->

                <!-- Navigatiebalk -->
                <nav class="navbar">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="dames.html">Dames</a></li>
                        <li><a href="heren.html">Heren</a></li>
                        <!--werkende linkjes-->
                    </ul>
                </nav>
            </div>

        </header>

        <div class="gegeven">

            <h2>Uw gegevens</h2> <br>
            <div class="lijnen"></div><br> <br> <br>

            <div id="resultaat"> </div>

            <br> <br> <br>
            <div class="lijnen"></div>
        </div>

        <footer>

            <!--Gecentreerd met flexbox-->
            <div class="bovenkant">
                <div class="betalen">
                    <h3>Veilig betalen</h3> <br>
                    <div>Betaal in </div>
                    <div>alle veiligheid</div>
                    <div>met onze </div>
                    <div>partners</div>
                </div>
                <!--info over betaling links-->

                <div class="klanten">

                    <h3>Klantenservice</h3> <br>
                    <ul>
                        <li>Wachtwoord vergeten</li>
                        <li>Veilige betaling</li>
                        <li>Levering</li>
                        <li>Retouneren</li>
                    </ul>
                </div>
                <!--info over klantenservice midden-->

                <div class="informatie">
                    <h3>Over ons</h3> <br>
                    <ul>
                        <li>Over ons</li>
                        <li>Contact informatie</li>
                        <li>Algemene voorwaarden</li>
                        <li>Privacy beleid</li>
                    </ul>
                </div>
                <!--info over ons rechts-->
            </div>

        </footer>

        <div class="onderkant">
            Copyright @ gymshark.com <!--copyright tekst. Onderkant van de footer-->
        </div>

        <!--de footer staat onder aan de pagina, hier komt het laatste beetje informatie in te staan-->

        <script src="assets/js/app.js"></script>
    </div>

    <?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "formphp";


// Maak verbinding met de database
$conn = new mysqli($servername, $username, $password, $dbname);


// Controleer verbinding
if ($conn->connect_error) {
    die("Verbinding mislukt: " . $conn->connect_error);
}


// Variabelen voor JavaScript-output
$voornaam = $achternaam = $email = $tussenv = $aanhef = $huisnummer= $straatnaam = $postcode = $land = $telefoonnummer = $datum = "";


if ($_SERVER["REQUEST_METHOD"] == "GET") {
    if (!empty($_GET['voornaam']) 
    && !empty($_GET['achternaam']) 
    && !empty($_GET['email']) 
    && !empty($_GET['tussenv']) 
    && !empty($_GET['aanhef'])
    && !empty($_GET['huisnummer'])
    && !empty($_GET['straatnaam'])
    && !empty($_GET['postcode'])
    && !empty($_GET['land'])
    && !empty($_GET['telefoonnummer'])
    && !empty($_GET['datum'])) { 
       
        $voornaam = $_GET['voornaam'];
        $achternaam = $_GET['achternaam'];
        $email = $_GET['email'];
        $tussenv = $_GET['tussenv'];
        $aanhef = $_GET['aanhef'];
        $huisnummer = $_GET['huisnummer'];
        $straatnaam = $_GET['straatnaam'];
        $postcode = $_GET['postcode'];
        $land = $_GET['land'];
        $telefoonnummer = $_GET['telefoonnummer'];
        $datum = $_GET['datum'];


        // Gebruik een prepared statement om SQL-injectie te voorkomen
        $stmt = $conn->prepare("INSERT INTO persoonsgegevens (voornaam, achternaam, email, tussenv, aanhef, huisnummer, straatnaam, postcode, land, telefoonnummer, datum) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"); 
        $stmt->bind_param("sssssssssss", $voornaam, $achternaam, $email, $tussenv, $aanhef, $huisnummer, $straatnaam, $postcode, $land, $telefoonnummer, $datum);

        if ($stmt->execute()) {
            $message = "Uw gegevens zijn succesvol opgeslagen.";
        } else {
            $message = "Fout bij opslaan: " . $stmt->error;
        }


        $stmt->close();
    } else {
        $message = "Vul alle velden in.";
    }
}

$conn->close();
?>
</body>

</html>