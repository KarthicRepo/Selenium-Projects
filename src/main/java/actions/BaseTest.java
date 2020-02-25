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

import bsh.Capabilities;
import io.github.bonigarcia.wdm.DriverManagerType;
import io.github.bonigarcia.wdm.WebDriverManager;

public class BaseTest {

	private static WebDriver driver;

	public static WebDriver getInstance() {
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

		return driver;

	}
	
	private BaseTest() {
		
	}

		
}
