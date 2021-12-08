
        let model, webcam, labelContainer, maxPredictions,buttoncontainer,test;
    // Load the image model and setup the webcam
    async function test1() {
        const URL = "https://teachablemachine.withgoogle.com/models/UTCVWT654/";

        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";

        // load the model and metadata
        // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
        // or files from your local hard drive
        // Note: the pose library adds "tmImage" object to your window (window.tmImage)
        model = await tmImage.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();

        // Convenience function to setup a webcam
        const flip = true; // whether to flip the webcam
        webcam = new tmImage.Webcam(500, 500, flip); // width, height, flip
        await webcam.setup(); // request access to the webcam
        await webcam.play();
        window.requestAnimationFrame(loop);

        // append elements to the DOM
        document.getElementById("webcam-container").appendChild(webcam.canvas);
        labelContainer = document.getElementById("label-container");
        for (let i = 0; i < maxPredictions; i++) { // and class labels
            labelContainer.appendChild(document.createElement("div"));
        }
    }

    async function loop() {
        webcam.update(); // update the webcam frame
        await predict();
        window.requestAnimationFrame(loop);
    }

    // run the webcam image through the image model
    async function predict() {
        // predict can take in an image, video or canvas html element
        const prediction = await model.predict(webcam.canvas);
        
        if(prediction[0].className=="pet" && prediction[0].probability.toFixed(2)==1.00){
            labelContainer.childNodes[0].innerHTML = "<h1>pet</h1>";
            test="pet";
        }
        else if(prediction[1].className=="can" && prediction[1].probability.toFixed(2)==1.00){
            labelContainer.childNodes[0].innerHTML = "<h1>can</h1>";
            test="can";
        }
        else if(prediction[2].className=="glass" && prediction[2].probability.toFixed(2)>0.95){
            labelContainer.childNodes[0].innerHTML = "<h1>glass</h1>";
            test="glass";
        }
        else{
            labelContainer.childNodes[0].innerHTML = "<h1>no</h1>";
            test="no";
        }

        // for (let i = 0; i < maxPredictions; i++) {
        //     const classPrediction =
        //         prediction[i].className + ": " + prediction[i].probability.toFixed(2);
        //     labelContainer.childNodes[i].innerHTML = classPrediction;
        // }
    }

    function exited(){
        return test;
    }
    module.exports={
        test1:function(){return test1();},
        exited:function(){return exited();}
    }