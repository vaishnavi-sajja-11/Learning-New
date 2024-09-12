package com.example.sampleRest.versioning;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class VersioningPersonControl {
	
	@GetMapping(path="/getPerson/v1", produces={"application/json"})
	public PersonV1 getPerson1()
	{
		return new PersonV1("bob Charlie");
	}
	@GetMapping("/getPerson/v2")
	public PersonV2 getPerson()
	{
		return new PersonV2(new Name("Bob","Charlie"));
	}
	@GetMapping(path="/getPerson", produces={"application/json"}, params="version=1")
	public PersonV1 getPersonV1Param()
	{
		return new PersonV1("bob Charlie");
	}
	@GetMapping(path="/getPersonV2", produces= {"application/json"},params="version=2")
	public PersonV2 getPersonRequestParams()
	{
		return new PersonV2(new Name("Bob","Charlie"));
	}
	@GetMapping(path="/getPerson", produces={"application/json"}, headers="X-API-HEADER=1")
	public PersonV1 getPersonV1ParamHeaders()
	{
		return new PersonV1("bob Charlie");
	}
	@GetMapping(path="/getPersonV2", produces= {"application/json"},headers="X-API-HEADER=2")
	public PersonV2 getPersonRequestParamsHeaders()
	{
		return new PersonV2(new Name("Bob","Charlie"));
	}
}
