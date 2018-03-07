package com.news;

import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;



@WebServlet("/MyServlet")
public class MyServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		JSONObject json = new JSONObject();
		JSONArray jarray = new JSONArray();
		JSONParser parser = new JSONParser();

		
		response.setContentType("application/json");
		
		String title = request.getParameter("title");
		PrintWriter out = response.getWriter();
		
		out.print("Added <b>" + title + "</b> to your favorites");

		
		
		json.put("title", title);
		
		
		File f = new File("//home//sapient//Documents//workspace-sts-3.9.2.RELEASE//newsearch//src//com//news//dav.json");
		
		if (f.exists()) {
			try {
				
				jarray = (JSONArray) parser.parse(new FileReader("//home//sapient//Documents//workspace-sts-3.9.2.RELEASE//newsearch//src//com//news//dav.json"));
			} catch (ParseException e) {
				e.printStackTrace();
			}
		}
		
		if (jarray.size() < 10) {
			jarray.add(json);
			FileWriter jsonFile = null;
			try {
				
				jsonFile = new FileWriter("//home//sapient//Documents//workspace-sts-3.9.2.RELEASE//newsearch//src//com//news//dav.json");
				jsonFile.write(jarray.toString());
				System.out.println(json.toString());
			} catch (Exception e) {
				e.printStackTrace();
			} finally {
				jsonFile.flush();
			}
		} else {
			System.out.println("Trying to add more than 10 favourites");
		}
}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		doGet(request, response);
	}

}
