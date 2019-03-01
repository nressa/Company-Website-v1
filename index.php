<!DOCTYPE html>
<html lang="en">

<?php include ('inc/header.php') ?>

<body>

	<?php include ('inc/_home.php') ?>

	<nav class="nav nav-pills nav-fill bg-dark">
		<a href="#home" class="nav-item nav-link" href="#">HOME</a>
		<a href="#about" class="nav-item nav-link" href="#">ABOUT</a>
		<a href="#team" class="nav-item nav-link" href="#">TEAM</a>
		<a href="#experience" class="nav-item nav-link" href="#">EXPERIENCE</a>
		<a href="#product" class="nav-item nav-link" href="#">PRODUCTS</a>
		<a href="#review" class="nav-item nav-link" href="#">TESTIMONIAL</a>
		<a href="#contact" class="nav-item nav-link" href="#">CONTACT</a>
	</nav>

	<?php include ('inc/_about.php') ?>

	<?php include ('inc/_team.php') ?>

	<?php include ('inc/_experience.php') ?>

	<?php include ('inc/_product.php') ?>

	<?php include ('inc/_reviews.php') ?>
	<br/>
	<?php include ('inc/_contact.php') ?>



	<?php include ('inc/scripts.php') ?>

	<script type="text/javascript" src="onScroll.js"></script>
	<script type="text/javascript" src="portfolio.js"></script>
</body>
</html>