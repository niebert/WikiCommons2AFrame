# WikiCommons2AFrame
Generates 360 degree image in [AFrame](https://aframe.io) for a downloaded Wiki Commons Image with Generator. The tools contain:
* Creator a [single annotated 360 degree images](https://niebert.github.io/WikiCommons2AFrame/aframe360starter.html) with text visible in the Aframe environment.
* Use [multiple 360 degree images](https://niebert.github.io/WikiCommons2AFrame/aframe360starter.html) for explorative environment for a geolocation. Input are the 360 degree images and the tool generates a ZIP file that contains for all location a file with the provided 360-degree images and an `index.html` that contains a link to all selected  360-degree image in AFrame. The title for the `index.html` can be defined in the tool above the selected images.

## Common Pitfalls
* **(Unzip Generated ZIP)** The `Generate ZIP` button creates and ZIP file and will be saved in your download folder. Do not start the `index.html` in the ZIP file. Unzip/extract all files before and load the `index.html` from the extracted folder.

## Tutorial
* You can used the [WikiCommons2AFrame Tools](https://niebert.github.io/WikiCommons2AFrame) to create 360 degree images. There are two to
* Select an equirectangular spherical image from [WikiCommons](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Aldara_parks.jpg/1280px-Aldara_parks.jpg) or [GitHub](https://www.github.com/niebert/HuginSample)
   * from WikiCommons e.g. look for keywords "360 degree" or spherical image  
   * from GitHub and check e.g. the [HuginSample](https://www.github.com/niebert/HuginSample) and use the image URL in [WikiCommons2AFrame](https://niebert.github.io/WikiCommons2AFrame).


## See also
* [HuginSample](https://www.github.com/niebert/HuginSample) for generating a equirectangular image from several images taken from a center of the sphere of the 360 degree image. [Hugin is an OpenSource tool](http://hugin.sourceforge.net/) to create equirectangular images
* [JSON3D4Aframe](https://niebert.github.io/JSON3D4Aframe) to add geometric primitives to the 3D scene.
