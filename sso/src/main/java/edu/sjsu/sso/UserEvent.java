package edu.sjsu.sso;
@Entity
public class UserEvent {

    private static SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm'Z'");

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;
    
    @Lob 
    private String token;

    private String userId;

    @Temporal(TemporalType.TIMESTAMP)
    private Date loginAt;

    @Temporal(TemporalType.TIMESTAMP)
    private Date tokenIssuedAt;

    @Temporal(TemporalType.TIMESTAMP)
    private Date lastViewedAt;
    
    public UserEvent() {}

    public UserEvent(String userId, String name,String token,Date loginAt,Date issueAt) {
        this.userId=userId;
        this.name = name;
        this.token = token;
        this.loginAt = loginAt;
        this.lastViewedAt=loginAt;
        this.tokenIssuedAt=issueAt;
    }

    @Override
    public String toString() {
        return "UserEvent{" +
            "id=" + id +
            ", name='" + name + '\'' +
            ", token='" + token + '\'' +
            ", loginAt='" + loginAt + '\'' +
            '}';
    }

    // put boilerplate getters and setters here

    @Transient
    public String getTokenIssuedAtString() {
        return formatter.format(tokenIssuedAt);
    }
    
    @Transient
    public String getLastViewedAtString() {
        return formatter.format(lastViewedAt);
    }
    
    @Transient
    public String getLoginAtString() {
        return formatter.format(loginAt);
    }
}