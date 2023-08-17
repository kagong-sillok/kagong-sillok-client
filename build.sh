#!/bin/sh
cd ../
mkdir output
cp -R $GITHUB_WORKSPACE/* ./output
cp -R ./output $GITHUB_WORKSPACE/