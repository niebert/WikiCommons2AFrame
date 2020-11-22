vDataJSON.image360html = `
<!DOCTYPE html>
<HTML>
	<HEAD>
		<meta charset='utf-8'>
		<meta repository='https://www.gitlab.com/niehausbert/aframe360' created='11.10.2019'>
		<TITLE>360 Aframe Panorama</TITLE>
		<meta name="description" content="360&deg; Image - A-Frame">
		<script src='../js/aframe-v1.0.4.js'></script>
	</HEAD>
	<BODY>
		<a-scene>
			<a-assets>
			</a-assets>
			<a-sky src="data:___MIME_TYPE___;base64,___BASE64_IMAGE___" rotation='0 -130 0'></a-sky>
      <!-- <a-sound src="src: url(audio/ocean_waves.mp3)" autoplay="true" position="0 2 5"></a-sound> -->
     </a-scene>
  </BODY>
</HTML>
      `;
