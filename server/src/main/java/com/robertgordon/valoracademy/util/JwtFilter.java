package com.robertgordon.valoracademy.util;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.filter.GenericFilterBean;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;

/**
 * The JwtFilter class extends the GenericFilterBean class
 */
public class JwtFilter extends GenericFilterBean {

    /**
     * This method checks for a valid authentication header and sets user claims and attributes for
     * further processing.
     * @param servletRequest An object that represents the client's request to the server, including
     * information such as headers, parameters, and request body.
     * @param servletResponse The response object that will be sent back to the client by the servlet.
     * @param filterChain The filterChain is an object that represents the chain of filters that will
     * be applied to the request and response objects in a web application. It is responsible for
     * passing the request and response objects to the next filter in the chain or to the servlet that
     * will handle the request.
     */
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain)
            throws IOException, ServletException {
        final HttpServletRequest request = (HttpServletRequest) servletRequest;
        final HttpServletResponse response = (HttpServletResponse) servletResponse;
        final String authHeader = request.getHeader("authorization");

        if ("OPTIONS".equals(request.getMethod())) {
            response.setStatus(HttpServletResponse.SC_OK);
            filterChain.doFilter(request, response);
        } else {
            if (authHeader == null || !authHeader.startsWith("Bearer ")) {
                response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Invalid authentication header");
            } else {
                final String token = authHeader.substring(7);
                Claims claims = Jwts.parser().setSigningKey("secret").parseClaimsJws(token).getBody();
                request.setAttribute("claims", claims);
                request.setAttribute("user", servletRequest.getParameter("id"));
                filterChain.doFilter(request, response);
            }
        }
    }
}
