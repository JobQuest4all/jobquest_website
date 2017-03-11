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
	
	public static void init() throws IOException{
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