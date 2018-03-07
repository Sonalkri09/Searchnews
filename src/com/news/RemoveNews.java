package com.news;

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

/**
 * Servlet implementation class RemoveNews
 */
@WebServlet("/RemoveNews")
public class RemoveNews extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
    	PrintWriter out = response.getWriter();
		String value = request.getParameter("index");		
		int index = Integer.parseInt(value);
		JSONParser parser = new JSONParser(); 
	  	JSONArray array = new JSONArray();
	  	FileWriter jsonFile = null;
		try {
			array = (JSONArray)parser.parse(new FileReader("//home//sapient//Documents//workspace-sts-3.9.2.RELEASE//newsearch//src//com//news//dav.json"));
			array.remove(index);
			jsonFile =  new FileWriter("//home//sapient//Documents//workspace-sts-3.9.2.RELEASE//newsearch//src//com//news//dav.json");
			jsonFile.write(array.toString());
			
		} catch (ParseException e) {
			e.printStackTrace();
		}finally {
			jsonFile.flush();
		}		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
