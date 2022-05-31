package pl.transport.backend.configuration;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;

import java.io.IOException;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

public class LocalDateTimeSerializer extends StdSerializer<LocalDateTime> {

	protected LocalDateTimeSerializer(Class<LocalDateTime> t) {
		super(t);
	}

	protected LocalDateTimeSerializer(JavaType type) {
		super(type);
	}

	protected LocalDateTimeSerializer(Class<?> t, boolean dummy) {
		super(t, dummy);
	}

	protected LocalDateTimeSerializer(StdSerializer<?> src) {
		super(src);
	}

	@Override
	public void serialize(LocalDateTime localDateTime, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
		long epochSeconds = localDateTime.atZone(ZoneOffset.systemDefault()).toEpochSecond();
		jsonGenerator.writeNumber(epochSeconds);
	}
}
