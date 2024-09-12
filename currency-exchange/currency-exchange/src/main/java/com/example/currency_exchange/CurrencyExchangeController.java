package com.example.currency_exchange;

import java.math.BigDecimal;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CurrencyExchangeController {
	
	@Value("${server.port}")
	private String port;
	
	@GetMapping("/currency-exchange/{from}/to/{to}")
	public CurrencyExchange retrieveValue(@PathVariable String from ,@PathVariable String to)
	{
		CurrencyExchange exchange= new CurrencyExchange(from,to,BigDecimal.valueOf(50),1000L);
		exchange.setEnvironment(port);
		return exchange;
	}

}
