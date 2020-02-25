package actions;

import java.io.IOException;
import java.net.URL;
import java.util.List;
import java.util.Optional;

import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;

import com.aventstack.extentreports.ExtentReports;

import bsh.Capabilities;
import io.github.bonigarcia.wdm.DriverManagerType;
import io.github.bonigarcia.wdm.WebDriverManager;
import utils.ScenarioCacheManager;

public class BaseTest {

	private static WebDriver driver;
	private static ThreadLocal<WebDriver> driverThreads = new ThreadLocal<>();
	private static  ThreadLocal<ScenarioCacheManager> cacheManagerThreads= new ThreadLocal<>();

	public static void setUpDriver() {
		
		if(driverThreads.get() == null) {
			String dirPath = System.getProperty("user.dir") + "//src//test//resources//executables//chromedriver.exe";
			System.setProperty("webdriver.chrome.driver", dirPath);
			
			//WebDriverManager.chromedriver().setup();
			ChromeOptions options=new ChromeOptions();
			DesiredCapabilities cap = DesiredCapabilities.chrome();
			cap.setPlatform(Platform.ANY);
			cap.setBrowserName("chrome");
			
			options.setAcceptInsecureCerts(true);
			options.setCapability(CapabilityType.BROWSER_NAME,"Chrome");
			options.setCapability(CapabilityType.PLATFORM,Platform.ANY);
			
			driver = new ChromeDriver(options.merge(cap));
			driverThreads.set(driver);
			
		}

	}
	
	private BaseTest() {
		
	}
	
	public static void setDriver(WebDriver driver) {
		driverThreads.set(driver);
	}
	
	public static WebDriver getDriver() {
		
		if(null == driverThreads.get()) {
			setUpDriver();
		}
		return driverThreads.get();
	}
	
	public static void setScenarioCache(ScenarioCacheManager scenarioCache) {
		cacheManagerThreads.set(scenarioCache);
	}
	
	public static ScenarioCacheManager getScenarioCache() {
		
		if(null ==  cacheManagerThreads.get()) {
			setScenarioCache(ScenarioCacheManager.getInstance());
		}
		return cacheManagerThreads.get();
	}
	

	public static void destroyDriver() {
		if( driverThreads.get() !=null) {
			 driverThreads.get().close();
			 driverThreads.get().quit();
		}
		driverThreads.set(null);
	}
		
}
