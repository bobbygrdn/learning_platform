package com.valoracademy.server.model;

import jakarta.persistence.*;

@Entity
@Table(name = "settings")
public class Settings {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "registrations", nullable = false)
    private boolean registrations;

    public Settings() {

    }

    public Settings(boolean registrations) {
        this.registrations = registrations;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public boolean isRegistrations() {
        return registrations;
    }

    public void setRegistrations(boolean registrations) {
        this.registrations = registrations;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        result = prime * result + (registrations ? 1231 : 1237);
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Settings other = (Settings) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        if (registrations != other.registrations)
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "Settings [id=" + id + ", registrations=" + registrations + "]";
    }

}
