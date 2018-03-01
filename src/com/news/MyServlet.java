package com.news;

import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;


@WebServlet("/MyServlet")
public class MyServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		JSONObject info = new JSONObject();
		JSONArray  addresses = new JSONArray();
	
		try {
			
			info.put("title",request.getParameter("title"));
			
		} catch (JSONException e) {
			e.printStackTrace();
		}
	
	try {
		
		FileWriter jsonFileWriter = new FileWriter("//home//sapient//Documents//workspace-sts-3.9.2.RELEASE//newsearch//src//com//news//dav.json",true);
		//System.out.println(info.toString());
		jsonFileWriter.write(info.toString());
		jsonFileWriter.flush();
		jsonFileWriter.close();
		
	} catch (Exception e) {
		e.printStackTrace();
	} finally {
		response.setContentType("application/json");
		response.getWriter().write(info.toString());
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
