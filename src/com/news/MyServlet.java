package com.news;

import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.jar.JarException;

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
	
	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		JSONObject info = new JSONObject();
		JSONArray  addresses = new JSONArray();
	
		info.put("title",request.getParameter("title"));
	
	try {
		
		FileWriter jsonFileWriter = new FileWriter("C:\\Users\\User\\Documents\\workspace-sts-3.9.2.RELEASE\\SearchNews\\src\\com\\news\\dav.json",true);
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