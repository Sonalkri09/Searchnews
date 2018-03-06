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

/**
 * Servlet implementation class RemoveNews
 */
@WebServlet("/RemoveNews")
public class RemoveNews extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
				JSONArray array = new JSONArray();
				JSONObject obj= new JSONObject();

				
				response.setContentType("application/json");
				
				String title = request.getParameter("title");
				
				PrintWriter out = response.getWriter();
				
				out.print("Removing <b>" + title + "</b> from your favorite locations");
				
				String fileName = "//home//sapient//Documents//workspace-sts-3.9.2.RELEASE//newsearch//src//com//news//dav.json";
				JSONParser parser = new JSONParser();
				try {
					
					array = (JSONArray) parser.parse(new FileReader(fileName));
					
					for (int looper = 0; looper < array.size(); looper++) {
						title = (String) array.get(looper);
						
						if (String.valueOf(obj.get("title")).equals(String.valueOf(title))) {
							
							array.remove(looper);
							FileWriter jsonFile = null;
							try {
								jsonFile = new FileWriter(fileName);
								jsonFile.write(array.toString());
							} catch (Exception e) {
								System.out.println("Please enter a valid path where you want to store your json");
							} finally {
								jsonFile.flush();
								jsonFile.close();
							}
							break;
						}
					}
				} catch (Exception e) {
					// if exception occurs
					e.printStackTrace();
				}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
