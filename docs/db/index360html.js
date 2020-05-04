vDataJSON["index360html"] = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>WikiCommons2AFrame - Load Images into ZIP</title>
    <!-- Main CSS -->
    <link href="css/main.css" rel="stylesheet">
  </head>
  <body>
    <hr>
    <center>
        <h2>Wiki Commons to 360-Degree List</h2>
        <h3><i>based on AFrame Library: <a href="https://aframe.io/" target="_blank">AFrame 3D Models</a></i></h3>
    </center>
    <hr>
    <p>
      <a href="https://www.github.com/niebert/WikiCommons2AFrame" target="_blank">WikiCommons2AFrame</a> will create a 360 Degree Image on the fly and create a <a href="https://aframe.io/examples/showcase/sky/" target="_blank">AFrame VR</a>.<br>
      The WikiCommon image as source image is used (see <a href="https://en.wikiversity.org/wiki/3D_Modelling/Create_3D_Models/Wiki_360_Degree_AFrame" target="_blank">Create 360 Degree Image for AFrame</a>)
    </p>
    <ul>___IMAGE360_LIST___
    </ul>
    <hr>
  </body>
</html>
`;
console.log("LOG: vDataJSON.index360html='" + vDataJSON.index360html + "' in Library");
