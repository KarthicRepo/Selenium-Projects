package utils;

import java.io.File;
import java.io.IOException;
import java.util.Date;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;
import com.aventstack.extentreports.reporter.configuration.Theme;

import actions.DriverManager;

 
  
public class ExtentManager {
 
	static ExtentReports extent;
	public static String screenshotName;
	
    static Date d = new Date();
	static String fileName = "Extent_" + d.toString().replace(":", "_").replace(" ", "_") + ".html";
    
    public synchronized static ExtentReports getReporter() {
        if (extent == null) {
        	
        	System.out.println("FileName:"+fileName);
        	
        	 ExtentHtmlReporter htmlReporter = new ExtentHtmlReporter(System.getProperty("user.dir")+"/reports/"+fileName);
  	       
        	  
 	        htmlReporter.config().setTheme(Theme.STANDARD);
 	        htmlReporter.config().setDocumentTitle(fileName);
 	        htmlReporter.config().setEncoding("utf-8");
 	        htmlReporter.config().setReportName(fileName);
 	        
 	        extent = new ExtentReports();
 	        extent.attachReporter(htmlReporter);
 	        extent.setSystemInfo("Sdet", "Karthic K");
 	        extent.setSystemInfo("Organization", "HPE R&D");
 	        extent.setSystemInfo("Build no", "Snap-001");
 	        
 	        System.out.println("Successfully created ExtenManage");
        }
        return extent;
    }
  
   
	
	static int i=0;
	public static String captureScreenshot() {
		i = i + 1;
		File scrFile = ((TakesScreenshot) DriverManager.getDriver()).getScreenshotAs(OutputType.FILE);

		Date d = new Date();
		screenshotName = d.toString().replace(":", "_").replace(" ", "_") + "_"+i+".jpg";
		String screenShotPath =System.getProperty("user.dir") + "/reports/" + screenshotName;
		try {
			FileUtils.copyFile(scrFile, new File(screenShotPath));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return screenShotPath;
	}
	
	
	}

