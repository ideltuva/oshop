#!/usr/bin/env bash
sudo lsof -t -i tcp:4200 | xargs kill -9
