package com.news;

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



@WebServlet("/MyServlet")
public class MyServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	JSONArray jarray = new JSONArray();
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		JSONObject json = new JSONObject();

		// setting response type
		response.setContentType("application/json");
		// sending the response
		String title = request.getParameter("title");
		PrintWriter out = response.getWriter();
		// shows the movie added
		out.print("Thank you for adding <b>" + title + "</b> to your favorite locations");
		
		// json object to store key value pairs
		json.put("title", title);
		

		// adding json object to json array
		jarray.add(json);

		FileWriter jsonFile = null;

		try {
			// opening a file and writing json array in it
			jsonFile = new FileWriter("//home//sapient//Documents//workspace-sts-3.9.2.RELEASE//newsearch//src//com//news//dav.json");
			jsonFile.write(jarray.toString());
			System.out.println(json.toString());
		} catch (Exception e) {
			// in case of exception
			System.out.println("Please enter a valid path where you want to store your json");
		} finally {
			jsonFile.flush();
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
