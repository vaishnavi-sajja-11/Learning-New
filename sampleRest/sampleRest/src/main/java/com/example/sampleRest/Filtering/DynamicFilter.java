package com.example.sampleRest.Filtering;

import org.springframework.http.converter.json.MappingJacksonValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DynamicFilter {
	@GetMapping("/getValues")
	public SomeBean filterNow()
	{
		return new SomeBean("value1","value2","value3");
	}
//	@GetMapping("/getValues-filtering")
//	public SomeBean filterDynamic()
//	{
//		SomeBean some =  new SomeBean("value1","value2","value3");
//		MappingJacksonValue val = new MappingJacksonValue(some);
//		
//		val.setFilters(filters);
//		return some;
//	}

}
