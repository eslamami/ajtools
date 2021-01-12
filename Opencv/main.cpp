//
//  main.cpp
//  Opencv
//
//  Created by Islam Ebrahim on 11/15/20.
//  Copyright © 2020 Islam Ebrahim. All rights reserved.
//

#include <iostream>

#include <highgui.hpp>
#include <imgproc.hpp>
#include <core/core.hpp>
#include <videoio.hpp>
#include <core/mat.hpp>
#include <imgcodecs.hpp>
#include <opencv.hpp>

using namespace cv;



int main(int argc, const char * argv[]) {

    
    while (1) {
        
        Mat image = imread("bounce.jpg");
        image = image/2 ; 
        imshow("Image",image);
        waitKey(0);
        
        
    }
}
