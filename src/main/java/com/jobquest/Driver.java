package com.jobquest;

import static spark.Spark.*;

public class Driver {
    public static void main(String[] args) {
        get("/hello", (req, res) -> "Hello World");

    }
}