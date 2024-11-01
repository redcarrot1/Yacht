package site.yacht.backend.global.config.swagger;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.context.properties.ConfigurationProperties;

import java.util.List;

@Getter
@RequiredArgsConstructor
@ConfigurationProperties("springdoc.bearer")
public class BearerTokenProperties {

    private final boolean enabled;
    private final List<BearerToken> tokens;

    public record BearerToken(String name, String token) {
    }
}
