package com.jobquest;

import static spark.Spark.*;
import spark.ModelAndView;
import spark.TemplateEngine;

import java.io.IOException;
import java.util.*;

import spark.route.RouteOverview;
import spark.template.thymeleaf.ThymeleafTemplateEngine;

public class Driver {
	
	private static TemplateEngine engine;
	private static final String keyStorePassword="password";
	private static final String keyStoreLocation="src/main/config/security/jobquest.jks";
	
	public static void init() throws IOException{
		secure(keyStoreLocation, keyStorePassword, null, null);
		staticFiles.location("/public/app");
		RouteOverview.enableRouteOverview("/routes");
		engine=new ThymeleafTemplateEngine("public/app/templates/",".html");
	}
	
	public static void defineRoutes(){
		final ModelAndView map = new ModelAndView(new HashMap<String,String>(), "index");
		
		get("/", (req, resp) -> map, engine);
		get("/jobquest", (req, resp) -> map, engine);
	}
	
    public static void main(String[] args) throws IOException {
        init();
        defineRoutes();
    }
}